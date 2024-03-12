<script lang="ts" setup>

</script>

<template>
    <div class="bg-search-input-container-background flex py-3 pl-5 items-center gap-3 h-14">
        <div class="bg-panel-header-background flex items-center gap-5 px-3 py-1 rounded-lg flex-grow">
            <!-- <span class="cursor-pointer text-l"> -->
                <Icon name="heroicons-solid:magnifying-glass" color="#aebac1" class="cursor-pointer"/>
            <!-- </span> -->
            <div>
                <input 
                    type="text"
                    placeholder="Search or start a new chat"
                    class="bg-transparent text-sm focus:outline-none text-white w-full"
                />
            </div>
        </div>
        <div class="pr-5 pl-3 cursor-pointer text-l">
            <Icon name="fluent:filter-12-filled" color="#aebac1"/>
        </div>
    </div>
</template>
