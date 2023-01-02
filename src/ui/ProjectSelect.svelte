<script lang="ts">
import { projects } from '../lib/database';
import type { Project } from '../lib/types';
import { createEventDispatcher } from 'svelte';
    import ProjectCard from './ProjectCard.svelte';

let dispatch = createEventDispatcher()

function select(p: Project) {
  return () => dispatch('select', p)
} 
</script>

<div class="container mt-2">
<div class="row">
  {#each projects as project}
  <div class="col-4 ms-auto me-auto">
  <ProjectCard {project}>
    <div slot="buttons">
      <button on:click={select(project)} class="btn btn-primary">Take</button>
    </div>
  </ProjectCard>
  </div>
  {/each}
</div>
</div>