<script>
    import { page } from "@inertiajs/inertia-svelte";

    // normally this should give you many shared props (and log on any changes), but its empty
    $: console.log("page props", $page);

    let name = "world";
</script>

<h1>Hello {name}!</h1>
