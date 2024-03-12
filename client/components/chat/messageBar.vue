<script lang="ts" setup>

</script>

<template>
    <div class="bg-panel-header-background h-20 px-4 flex items-center gap-6 relative">
        <div class="flex gap-6">
            <Icon name="emojione-monotone:smiling-face" title="Emoji" color="#aebac1" size="22" class="cursor-pointer"/>
            <Icon name="foundation:paperclip" title="attachment" color="#aebac1" size="22" class="cursor-pointer"/>
        </div>
        <div class="w-full rounded-lg h-10 flex items-center">
            <input type="text" placeholder="Type a message" class="bg-input-background text-sm focus:outline-none text-white h-10 rounded-lg px-5 py-4 w-full"/>
        </div>
        <div class="flex w-10 items-center justify-center">
            <button>
                <Icon name="material-symbols:send" color="#aebac1" size="22"/>
            </button>
            <button>
                <Icon name="material-symbols:mic-rounded"  color="#aebac1" size="22"/>
            </button>
        </div>
    </div>
</template>
