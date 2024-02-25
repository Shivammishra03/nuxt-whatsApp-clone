<script setup>
// import { onClickOutside } from '@vueuse/core'
import {watchEffect } from 'vue';
    const contextMenuRef = ref(null);
    const ContextMenuVisible = ref(false);
    const props = defineProps({
        options: Object,
        cordinates: Object,
        toggleContextMenu: Function,
        isContextMenuVisible:Boolean
    });
    console.log(props.isContextMenuVisible)
    const handleClick = (e, callback) => {
        e.stopPropagation();
        props.toggleContextMenu();
        callback(e);
    };
    ContextMenuVisible.value = props.isContextMenuVisible;
    // onClickOutside(contextMenuRef, 
    //     event => console.log(event),
    //     props.isContextMenuVisible = false
    // );

// // Function to handle outside click
// const handleOutsideClick = (event) => {
//   if (!contextMenuRef.value.contains(event.target)) {
//     // setContextMenu(false);
//     props.isContextMenuVisible.value = false
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
// watchEffect(() => {
//     const handleOutsideClick = (event) => {
//         // debugger
//         console.log(event.target.id)
//         if(event.target.id !== "contextOpener") {
//             if(contextMenuRef.value && !(contextMenuRef.value.compareDocumentPosition(event.target) & Node.DOCUMENT_POSITION_CONTAINED_BY) && event.target.id !== "contextMenuRefID")
//             {
//                 ContextMenuVisible.value = false
//             }
//         }
//     };
//     document.addEventListener("click", handleOutsideClick);
//     return() => {
//         document.removeEventListener("click", handleOutsideClick);
//     }
// });
</script>
<template>
    <div ref="contextMenuRef" id="contextMenuRefID" :class="['bg-dropdown-background', 'fixed', 'py-2', 'z-[100]', 'shadow-xl']" :style="{ top: props.cordinates.y + 'px', left: props.cordinates.x + 'px' }" >
        <ul>
            <li v-for="(item, index) in props.options" :key="index" @click="handleClick($event, item.callback)" class="px-5 py-2 cursor-pointer hover:bg-background-default">
                <span class="text-white">{{ item.name }}</span>
            </li>
        </ul>
    </div>
</template>