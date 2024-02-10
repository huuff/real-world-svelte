<script lang="ts">
  const { value } = $props<{ readonly value: string }>();
</script>

<!--
     @component

     A single string value in a JSON object
-->

<span>{value}</span>
