<script lang="ts">
import CharacterCard from './CharacterCard.svelte'
import { chars } from '../lib/database';
import { createEventDispatcher } from 'svelte';
import type { Character } from '../lib/types';

let dispatch = createEventDispatcher()
function select(char:Character) {
  return () => dispatch('select', char)    
}
</script>

<div class="container">
  <div class="row">
  {#each chars as char}
    <div class="col-3 me-auto ms-auto">
    <CharacterCard {char}>
      <button class="btn btn-primary" on:click={select(char)}>Select</button>
    </CharacterCard>
    </div>
  {/each}
  </div>
</div>