<script lang="ts">
import type { Character } from "../../lib/types";
export let char:Character
$: percent = char.mental_health/char.max_mental_health*100
</script>
<div class="progress mb-1">
  <div class="progress-bar bg-danger" role="progressbar" aria-label="Mental health" style="width: {percent}%;" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100}>
    {char.mental_health}
  </div>
</div>