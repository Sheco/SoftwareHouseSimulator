<script lang="ts">
import { slide } from "svelte/transition";
import AffinityBadge from "./AffinityBadge.svelte";
import type { Character } from "../lib/types";
    import { createEventDispatcher } from "svelte";
export let char:Character
export let showSkills = true
let dispatch = createEventDispatcher()
</script>
<div class="card window" in:slide out:slide><div class="card-body">
  <h5 class="card-title">{char.name}</h5>
  <h6 class="card-subtitle mb-2">{char.description}</h6>
  <div class="card-text">
    <div>
      <button on:click={() => showSkills = !showSkills} class="btn btn-secondary">Skills</button>
      <button on:click={() => dispatch('break', char)} class="btn btn-secondary">Take a break</button>
    </div>
    {#if showSkills}
    <table class="table">
      {#each char.skills as skill}
        <tr>
          <td>{skill.base.name}</td>
          <td>{skill.level}</td>
          <td>
            <AffinityBadge amount={skill.affinity} />
          </td>
        </tr>
      {/each}
    </table>
    {/if}
  </div>
  <slot />
</div></div>

