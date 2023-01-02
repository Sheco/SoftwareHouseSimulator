
<script lang="ts">
export let value:number
export let max:number
export let aria_label=""
export let color="bg-dark"
$: percent = Math.floor(value/max*100)
</script>
<div class="progress mb-1">
  <div class="progress-bar {color}" role="progressbar" aria-label="{aria_label}" style="width: {percent}%;" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
    {value}
  </div>
</div>