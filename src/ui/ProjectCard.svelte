<script lang="ts">
import { createEventDispatcher } from "svelte";

import type { Project } from "../lib/types";
    import ProgressBar from "./ProgressBar.svelte";
export let project:Project
export let active = false

let dispatch = createEventDispatcher()
</script>

<div class="card window"><div class="card-body">
  <div class="card-title">{project.name}</div>
  <div class="card-text">
    {project.description}

    <h5>Requirements</h5>
    <table width="100%">
    {#each project.requirements as requirement}
      <tr>
        <td>{requirement.name}</td>
        {#if active}
        <td width="100%">
          <ProgressBar value={requirement.progress} max={100} />
        </td>
        <td><button class="btn btn-primary" on:click={() => dispatch('work', requirement)}>Work</button></td>
        {/if}
      </tr>
    {/each}
    </table>
    <slot name="buttons" />
  </div>
</div></div>