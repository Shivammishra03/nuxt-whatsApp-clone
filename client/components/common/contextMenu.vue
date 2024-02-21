<template>
    <div ref="contextMenuRef" id="contextMenuRefID" :class="['bg-dropdown-background', 'fixed', 'py-2', 'z-[100]', 'shadow-xl']" :style="{ top: props.cordinates.y + 'px', left: props.cordinates.x + 'px' }" >
        <ul>
            <li v-for="(item, index) in props.options" :key="index" @click="handleClick($event, item.callback)" class="px-5 py-2 cursor-pointer hover:bg-background-default">
                <span class="text-white">{{ item.name }}</span>
            </li>
        </ul>

    </div>
</template>

<script setup>
import {watchEffect } from 'vue';
    const contextMenuRef = ref(null);
    const props = defineProps({
        options: Object,
        cordinates: Object,
        toggleContextMenu: Function,
    });
    const handleClick = (e, callback) => {
        e.stopPropagation();
        props.toggleContextMenu();
        callback(e);
    };

// // Function to handle outside click
// const handleOutsideClick = (event) => {
//   if (!contextMenuRef.value.contains(event.target)) {
//     // setContextMenu(false);
//     props.toggleContextMenu();
//   }
// };

// // Watch for changes to contextMenuVisible and attach/detach click event listener accordingly
// watchEffect(onInvalidate => {
//   const clickHandler = (event) => {
//     handleOutsideClick(event);
//   };

//   document.addEventListener('click', clickHandler);

//   onInvalidate(() => {
//     document.removeEventListener('click', clickHandler);
//   });
// });
watchEffect(() => {
    const handleOutsideClick = (event) => {
        // debugger
        console.log(event.target.id)
        if(event.target.id !== "contextOpener") {
            // // debugger
            // console.log("here");
            // console.log(contextMenuRef);
            // console.log(contextMenuRef.current);
            // console.log(contextMenuRef.value);
            // console.log(contextMenuRef.event.target);
            // console.log(contextMenuRef.current.contains(event.target));
            // if(contextMenuRef.value && !contextMenuRef.current.contains(event.target)){
            //     console.log("come In");
            // }
            if(contextMenuRef.value && !(contextMenuRef.value.compareDocumentPosition(event.target) & Node.DOCUMENT_POSITION_CONTAINED_BY) && event.target.id !== "contextMenuRefID")
            {
                props.toggleContextMenu();
            }
        }
    };
    document.addEventListener("click", handleOutsideClick);
    return() => {
        document.removeEventListener("click", handleOutsideClick);
    }
});
</script>