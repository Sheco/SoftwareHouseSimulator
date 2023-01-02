<script type="ts">
export let amount = 2
</script>

<span class="badge bg-primary">
  {#if amount == 0}
    Normal
  {:else if amount == 1 }
    Likes it
  {:else if amount == 2 }
    Loves it
  {/if}
</span>
