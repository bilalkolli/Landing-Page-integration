<script setup lang="ts">
defineProps<{
  header: string,
  description: string,
  testimonial: string,
  testimonialImage: string,
  testimonialName: string,
  testimonialContribution: string
}>()
</script>

<template>
    <div>
        <h2>
            {{ header }}
        </h2>
        <p> {{ description }}</p>
    </div>
</template>