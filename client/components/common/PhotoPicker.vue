<script setup>
const props = defineProps({
    onChange: Function,
});
</script>

<template>
    <input type="file" hidden id="photoPicker" @change="props.onChange">
</template>
