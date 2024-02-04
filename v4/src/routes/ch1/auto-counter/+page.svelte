<script>
 import { startCounterOnMount } from "$lib/auto-counter";

 const counter = startCounterOnMount();
</script>

<span>{$counter}</span>
