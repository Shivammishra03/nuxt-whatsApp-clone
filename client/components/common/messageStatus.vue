<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
    messageStatus: String,
});

</script>

<template>
    <div>
        <h6>{{props.messageStatus}}</h6>
    </div>
</template>
