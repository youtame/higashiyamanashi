<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useTheme, useDisplay } from "vuetify";

import logo from "@/assets/logo.png";

const drawer = ref(false);
const showFirstNotice = ref(false);
const isHovering = ref(false);
const isScrolled = ref(false);

const theme = useTheme();
const { smAndDown } = useDisplay();

const isExpanded = computed(() => {
    return smAndDown.value ? true : isHovering.value;
});

const headericon = computed(() => ({
    name: "",
    icon: logo,
}));

const handleScroll = () => {
    isScrolled.value = window.scrollY > 0;
};

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark
        ? "light"
        : "dark";
}

onMounted(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    theme.global.name.value = mediaQuery.matches ? "dark" : "light";

    const seen = localStorage.getItem("retration_first_notice");
    if (!seen) {
        showFirstNotice.value = true;
    }
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <v-app>
        <v-app-bar
            app
            flat
            :class="{ 'v-app-bar--is-scrolled': isScrolled }"
            :color="isScrolled ? 'transparent' : 'transparent'"
            class="px-0"
        >
            <v-container
                class="d-flex align-center pa-0"
                style="max-width: 90%"
            >
                <v-app-bar-title
                    class="cursor-pointer"
                    @click="$router.push('/')"
                >
                    <v-img
                        v-if="headericon.icon"
                        :src="headericon.icon"
                        height="40"
                        width="140"
                        alt="logo"
                        class="mr-2"
                    />
                </v-app-bar-title>

                <v-spacer></v-spacer>

                <div class="d-none d-md-flex align-center">
                    <v-btn icon @click="toggleTheme" variant="text">
                        <v-icon>
                            {{
                                theme.global.current.value.dark
                                    ? "mdi-white-balance-sunny"
                                    : "mdi-weather-night"
                            }}
                        </v-icon>
                        <v-tooltip activator="parent" location="bottom"
                            >Appearance</v-tooltip
                        >
                    </v-btn>

                    <v-btn
                        icon
                        href="https://github.com/youtame/higashiyamanashi"
                        target="_blank"
                        variant="text"
                        class="mr-1"
                    >
                        <v-icon>mdi-github</v-icon>
                        <v-tooltip activator="parent" location="bottom"
                            >GitHub</v-tooltip
                        >
                    </v-btn>
                </div>

                <v-app-bar-nav-icon
                    class="d-md-none"
                    @click.stop="drawer = !drawer"
                />
            </v-container>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            location="right"
            temporary
            width="280"
        >
            <v-divider></v-divider>
            <v-list nav>
                <v-list-item>
                    <template v-slot:prepend>
                        <v-icon
                            :icon="
                                theme.global.current.value.dark
                                    ? 'mdi-weather-night'
                                    : 'mdi-white-balance-sunny'
                            "
                        ></v-icon>
                    </template>

                    <v-list-item-title class="font-weight-bold"
                        >Dark Mode</v-list-item-title
                    >

                    <template v-slot:append>
                        <v-switch
                            :model-value="theme.global.current.value.dark"
                            @update:model-value="toggleTheme"
                            color="primary"
                            hide-details
                            density="compact"
                        ></v-switch>
                    </template>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                    link
                    href="https://github.com/youtame/higashiyamanashi"
                    target="_blank"
                >
                    <template v-slot:prepend>
                        <v-icon icon="mdi-github"></v-icon>
                    </template>
                    <v-list-item-title class="font-weight-bold"
                        >GitHub</v-list-item-title
                    >
                </v-list-item>
                <v-divider class="my-2"></v-divider>
            </v-list>
        </v-navigation-drawer>

        <v-main class="main-view">
            <router-view />
        </v-main>

        <v-footer class="text-center d-flex flex-column ga-2 py-4">
            <v-divider class="my-2" thickness="2" width="50"></v-divider>
            <div class="text-caption opacity-60">source Himagin.env</div>
            <div>{{ new Date().getFullYear() }} — <strong>102℃</strong></div>
        </v-footer>
    </v-app>
</template>
<style lang="css" scoped>
:deep(.v-app-bar) {
    transition: all 0.4s ease !important;
}

:deep(.v-navigation-drawer) {
    border: none !important;

    background-color: rgba(var(--v-theme-surface), 0.8) !important;
    backdrop-filter: blur(15px);

    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1) !important;
    margin: 8px 0;
    height: calc(100% - 16px) !important;
    border-radius: 16px 0 0 16px !important;
}

.v-app-bar--is-scrolled {
    background-color: rgba(var(--v-theme-surface), 0.9) !important;
    backdrop-filter: blur(12px) !important;

    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05) !important;

    border-bottom: none !important;
}

.v-theme--dark .v-app-bar--is-scrolled {
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3) !important;
    background-color: rgba(var(--v-theme-surface), 0.9) !important;
}

.v-theme--dark :deep(.v-navigation-drawer) {
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4) !important;
}

:deep(.v-divider) {
    opacity: 0.05;
}

.main-view {
    width: 90%;
    max-width: 1100px;
    margin: auto;
}

.app-bar-top {
    background-color: transparent !important;
    transition: background-color 0.3s ease;
}

.app-bar-scrolled {
    backdrop-filter: blur(8px);
    transition: background-color 0.3s ease;
}
</style>
