<script setup>
    const props = defineProps({
        name: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        setState: {
            type: Function,
            required: true
        },
        label: {
            type: Boolean,
            default: false
        }
    });
    const updateState = event => {
        props.setState(event.target.value);
    };
</script>
<template>
    <div class="flex gap-1 flex-col">
      <label v-if="label" :for="name" class="text-teal-light text-lg px-1">{{ name }}</label>
      <div>
        <input
          type="text"
          :name="name"
          :value="state"
          @input="updateState"
          class="bg-input-background text-start focus:outline-none"
        />
      </div>
    </div>
</template>