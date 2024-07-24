<script setup lang="ts">
definePageMeta({
    navigation: {
        exclude: true,
    },
})

const { emailField, passwordField } = useFields()

const onError = () => {
    console.log('bad')
}
</script>

<template>
    <ElBox class="p-2">
        <FormBasic
            id="login"
            prefixed-label
            submit-on-change
            :fields="[
                emailField('email', 'test@test.com', true),
                passwordField('password', 'test@test.com', true),
            ]"
            :on-submit="(payload, fields) => {
                console.log('submit')
            }"
            :on-error="onError"
        />
    </ElBox>
</template>