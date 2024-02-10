<script lang="ts">
  const { value } = $props<{ readonly value: number }>();
</script>

<!--
     @component

     A single number value in a JSON object
-->
<span>{value}</span>
