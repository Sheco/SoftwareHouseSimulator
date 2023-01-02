<script lang="ts">
import CharacterSelect from "./ui/CharacterSelect.svelte";
import CharacterCard from "./ui/CharacterCard.svelte";
import { character, project } from "./lib/store";
import ProjectSelect from "./ui/ProjectSelect.svelte";
import ProjectCard from "./ui/ProjectCard.svelte";
import type { Character, CharacterSkill, Project, ProjectRequirement, ProjectRequirementOptions } from "./lib/types";
import MentalBar from "./ui/character/MentalBar.svelte";
import PhysicalBar from "./ui/character/PhysicalBar.svelte";

// FIXME: when adding multiple characters for a team, time is the max amount
// of time for each member, this would allow multitasking
let time = 0
function selectCharacter(ev) {
  // we use JSON stringify and parse to create a deep copy 
  let c:Character = JSON.parse(JSON.stringify(ev.detail))
  character.set(c)
}

function selectProject(ev) {
  let p:Project = JSON.parse(JSON.stringify(ev.detail))
  p.requirements.forEach(r => r.progress=0)
  project.set(p)
}

function affectHealth(character, skill:CharacterSkill) {
  character.update(c => {
    c.mental_health = Math.min(
      c.mental_health+skill.affinity+skill.base.mental_health, 
      c.max_mental_health
    )
    c.physical_health = Math.min(
      c.physical_health+skill.base.physical_health, 
      c.max_physical_health
    )
    return c
  })
}

function workUsingSkill(options:ProjectRequirementOptions, requirement:ProjectRequirement, skill:CharacterSkill) {
  // the character efficiency is his mental health percent
  let efficiency = $character.mental_health/$character.max_mental_health

  return () => {
    requirement.progress = Math.min(
      (requirement.progress??0)+skill.level*efficiency,
      requirement.total
    )
    options.progress = Math.floor(options.options.reduce((total, curr) => total+((curr.progress??0)/curr.total)*100, 0))
    let p = $project
    project.set(p)
    time++
    affectHealth(character, skill)
  }
}

let focus:ProjectRequirementOptions = null
let focus_skills:ProjectRequirement[] = []
function showWorkSkills(ev) {
  let requirement:ProjectRequirementOptions = ev.detail
  focus = requirement
  focus_skills = []
  break_activities = null
  focus.options.forEach(option => {
    option.character_skill = $character.skills.find(skill => option.skill.id==skill.base.id)
    if(!option.character_skill) return
    focus_skills.push(option)
  })
}

let break_activities:CharacterSkill[] = null
function showBreakActivities(ev) {
  let char:Character = ev.detail
  break_activities = char.skills.filter(skill => ['break','exercise'].includes(skill.base.category))
  focus = null
  focus_skills = []
}

function performBreak(skill:CharacterSkill) {
  return () => {
    affectHealth(character, skill)
    time++
  }
} 
</script>

{#if !$character}
<CharacterSelect on:select={selectCharacter}/>
{/if}

{#if $character && !$project}
<ProjectSelect on:select={selectProject}/>
{/if}

{#if $character && $project}
<div class="container">
  <div class="row">
    <div class="col-4">

      <div class="card window"><div class="card-body">
        Time: {time} hours
        <table width="100%">
          <thead><tr>
            <th>Name</th>
            <th>Mental</th>
            <th>Physical</th>
          </tr></thead>
          <tr>
            <td>{$character.name}</td>
            <td><MentalBar char={$character} /></td>
            <td><PhysicalBar char={$character} /></td>
          </tr>
        </table>
      </div></div>

      {#if break_activities}
      <div class="card window mt-2"><div class="card-body">
        {$character.name} can take a break doing these activities:
        <table width="100%">
          {#each break_activities as skill}
          <tr>
            <td>{skill.base.name}</td>
            <td><button class="btn btn-primary" on:click={performBreak(skill)}>Do</button></td>
          </tr>
          {/each}
        </table>
      </div></div>
      {/if}

    </div>

    <div class="col-4">
      <ProjectCard project={$project} active={true} on:work={showWorkSkills}/> 

      {#if focus}
      <div class="card window mt-2"><div class="card-body">
        <h5>{$character.name}'s skills available for {focus.name}</h5>
        <table width="100%">
          <tr>
            <th>Name</th>
            <th>Character skill Level</th>
            <th>Time</th>
          </tr>
          {#each focus_skills as skill}
            <tr>
              <td><a href="#" on:click={workUsingSkill(focus, skill, skill.character_skill)}>{skill.skill.name}</a></td>
              <td>{skill.character_skill.level}</td>
              <td>At least {Math.floor(skill.total/skill.character_skill.level)} sessions</td>
            </tr>
          {:else}
            <tr>
              <td>Nothing</td>
            </tr>
          {/each}
        </table>
        </div></div>
      {/if}
      </div>

    <div class="col-4 me-auto ms-auto">
      <CharacterCard char={$character} showSkills={false} on:break={showBreakActivities}/>
    </div>
  </div>

</div>
{/if}
