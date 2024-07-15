<template>
    <div
        :class='[
            "min-h-screen",
            "max-h-screen",
            "relative",
            "flex",
            "flex-col",
            "gap-4",
            "px-4",
            "rounded-lg",
        ]'
    >
        <AppHeader />

        <PageNavigation />

        <div class="flex-grow h-full overflow-auto">
            <slot />
        </div>
    </div>
</template>
