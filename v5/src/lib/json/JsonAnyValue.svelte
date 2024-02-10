<script lang="ts">
  const { value } = $props<{ readonly value: any }>();
</script>

<!--
     @component

     Any non-string, non-number and non-object value in a JSON object
-->

<span>{value}</span>
