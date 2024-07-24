<script setup lang="ts">
import { Combobox, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/vue'
import type { AppContext } from '~/types'

const context = inject<AppContext>('context')
const query = ref<string>('')

const filtered = computed(() =>
    query.value === ''
        ? context?.allLanguages
        : context?.allLanguages.filter((language) => {
              return language.toLowerCase().includes(query.value.toLowerCase())
          }),
)
</script>

<template>
    <Combobox
        as="div"
        class="relative"
    >
        <ComboboxInput
            class="d-input w-full bg-darker"
            @change="query = $event.target.value"
        />
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
            <ComboboxOptions
                class="absolute top-full z-10 w-full min-h-10 pt-2"
            >
                <ElBox name="language-list" class="p-4 shadow-3xl">
                    <template v-if="filtered?.length">
                        <ComboboxOption
                            v-for="language in filtered"
                            :key="language"
                            :value="language"
                        >
                            {{ language }}
                        </ComboboxOption>
                    </template>
                    <template v-else>
                        {{ tl('errors.noLanguages').value }}
                    </template>
                </ElBox>
            </ComboboxOptions>
        </transition>
    </Combobox>
</template>
