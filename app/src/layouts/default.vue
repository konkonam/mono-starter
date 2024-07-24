<template>
    <div class="flex flex-col h-full max-h-screen text-white gap-4 m-4 overflow-y-hidden">
        <LayoutStatusBar />
        <LayoutMenuBar />

        <div class="flex flex-col gap-2 overflow-auto overflow-x-visible">
            <slot />
        </div>
    </div>
</template>
