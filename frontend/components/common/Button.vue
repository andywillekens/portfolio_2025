<script setup lang="ts">
  interface Props {
    icon?: string
    variant?: 'outline' | 'link' | undefined
    label?: string
    trailing?: boolean
    to?: string | {}
  }

  const props = defineProps<Props>()

  const variant = computed(() => {
    switch (props.variant) {
      case 'outline':
        return 'text-minty-500 border-minty-500 hover:bg-minty-500/10'
      case 'link':
        return 'text-minty-700 border-transparent !px-0 hover:underline'
      default:
        return 'bg-minty-400 border-minty-400 hover:bg-minty-500 hover:border-minty-500 text-minty-950'
    }
  })

  const component = computed(() => {
    return props.to ? resolveComponent('NuxtLink') : 'button'
  })

  const buttonProps = computed(() => {
    return props.to ? { to: props.to } : { type: 'button' }
  })
</script>
<template>
  <component
    :is="component"
    v-bind="buttonProps"
    type="button"
    :class="[
      `group select-none w-fit inline-flex justify-start no-underline text-base text-center transition-all duration-200 outline-none cursor-pointer gap-2 border-solid border-1 items-center px-5 py-2.5 rounded-md`,
      variant
    ]">
    <Icon
      v-if="!props.trailing && props.icon"
      :name="props.icon"
      class="transition-all duration-200 shrink-0 text-lg pointer-events-none text-inherit" />
    <slot v-if="!props.label" class="w-full"></slot>
    <span v-if="props.label && props.label !== ''" class="w-full">{{ props.label }}</span>
    <Icon
      v-if="props.trailing && props.icon"
      :name="props.icon"
      class="transition-all duration-200 shrink-0 text-lg pointer-events-none text-inherit" />
  </component>
</template>
