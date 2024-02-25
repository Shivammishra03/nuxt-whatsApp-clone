<script setup>
const props = defineProps({
    onchangeData: Function,
});
</script>

<template>
    <Teleport to="body">
        <div id="photoPickerElement">
            <input type="file" hidden id="photoPicker" @change="props.onchangeData">
        </div>
    </Teleport>
</template>
