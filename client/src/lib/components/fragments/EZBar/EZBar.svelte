<script lang='ts'>
	import { goto } from "$app/navigation";
	import { Button } from "$lib/components/ui";

    const sponsorsClickHandler = () => {
        goto("/sponsors")
    }

    const logoClickHandler = () => {
        goto("/")
    }

    const eventsClickHandler = () => {
        goto("/events")
    }

    const teamClickHandler = () => {
        goto("/credits")
    }
</script>
<div class="main-header">
    <div class="header">
        <div class="left">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h1 class="logo" on:click={logoClickHandler}>
                Apratim
            </h1>
        </div>
        <div class="right">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h3 class="link" on:click={eventsClickHandler}>
                Events
            </h3>

            <h3 class="link" on:click={sponsorsClickHandler}>
                Sponsors
            </h3>
    
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <h3 class="link" on:click={teamClickHandler}>
                Organizers
            </h3>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <!-- <h3 class="link" on:click={() => window.open('https://www.guilded.gg/b/e249e5b0-cbd9-4318-92bb-9cc7fb8c6778', '_blank')?.focus()}>
                Invite Rayz!
            </h3>
            <Button variant='primary' label='Get Dashboard Access' onClick={handleDashboardLoginClick} /> -->
        </div>
    </div>
</div>

<style type="scss">
    .main-header {
        position: fixed;
        top: 32px;
        left: 0.5rem;
        right: 0.5rem;
        display: flex;
        justify-content: center;
        z-index: 100;
        .header {

            justify-content: center;
            height: 3.5rem;
            display: flex;
            justify-content: space-between;
            border-radius: 1rem;
            padding: 0.5rem 1rem;
            align-items: center;
            background-color: rgba(var(--secondary));

            border-radius: 1rem;
            box-shadow: 0 0 0.5rem var(--backdrop);

            cursor: default;
            z-index: 100;

            backdrop-filter: saturate(180%) blur(10px);
            @media only screen and (min-width: 1000px) {
                width: 60rem;
            }
            @media only screen and (max-width: 1000px) {
                width: 95vw;
            }
        }
    }

    .logo {
        cursor: pointer;
    }

    .right {
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .link {
        text-decoration: underline;
        cursor: pointer;
    }
</style>