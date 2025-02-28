<script setup>
const brands = ['Coca-Cola.svg','OpenAI.svg','Pallet.svg','Causal.svg','Plain.svg','Passionfoot.svg','Dopt.svg','Hyperline.svg','onDeck.svg','Bravado.svg','Beacons.svg']
</script>

<template>
    <div class="flex justify-center flex-col items-center mt-[80px]">
        <p class="flex items-center p-0.5 bg-dark-100 text-base-500 rounded-full max-w-[450px] gap-x-1">
            <span class="mr-1 text-white bg-base-600 rounded-full px-2.5 py-1">New</span>
            How Pallet uses Attio to power their GTM
            <NuxtImg class="ml-1.5 mr-3.5" width="8" height="8" src="/Vector.svg" />
        </p>
        <h1 class="font-heading text-base-600 text-h1-desktop max-w-[850px] text-center m-[32px]">
            Customer relationship magic.
        </h1>
        <p class="max-w-[550px] text-body-xl text-center text-base-500">
            Powerful, flexible and data-driven, Attio makes it easy to build the exact CRM your business needs.
        </p>
        <div class="m-[36px]">
            <NuxtLink class="py-3.5 px-4 mr-4 text-white bg-base-600 border-base-400 rounded-xl">
                Start for free
            </NuxtLink>
            <NuxtLink class="py-3.5 px-4 rounded-xl border border-base-200">
                Talk to sales
            </NuxtLink>
        </div>
        <NuxtImg src="/Hero.svg" width="1400" height="732" />
        <div class="flex flex-wrap my-24 mx-4 gap-x-16 gap-y-10 justify-between max-w-[1200px] max-custom-images:justify-center max-custom-images:gap-x-8">
            <img
                v-for="brand in brands" 
                :src="`/${brand}`"
                :key="brand"
                :alt="brand"
            />
        </div>
    </div>
</template>