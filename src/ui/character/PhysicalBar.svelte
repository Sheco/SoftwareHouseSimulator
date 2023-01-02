<script lang="ts">
import type { Character } from "../../lib/types";
export let char:Character
$: percent = char.physical_health/char.max_physical_health*100
</script>
<div class="progress mb-1">
  <div class="progress-bar bg-success" role="progressbar" aria-label="Mental health" style="width: {percent}%;" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
    {char.physical_health}
  </div>
</div>
