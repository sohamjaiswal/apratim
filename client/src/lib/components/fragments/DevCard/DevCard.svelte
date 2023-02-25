<script lang="ts">
	import Avatar from '../../ui/Avatar/Avatar.svelte';
    import type { IDevCard } from '../../../types/dev-card.types';
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface $$Props extends IDevCard{};
    export let bannerImage: $$Props['bannerImage'];
    export let avatarImage: $$Props['avatarImage'];
    export let devName: $$Props['devName'];
    export let devTagline: $$Props['devTagline'];
    export let colors: $$Props['colors'];
    // export let guildedProfileLink: $$Props['guildedProfileLink'];
    export let devBio: $$Props['devBio'];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="dev-card"
    style = {`
        background: linear-gradient(180deg, ${colors[0]}, ${colors[1]});
    `}
>
    <div class="banner-image" style={`
        background-image: url(${bannerImage})
    `}>
    </div>
    <div class="avatar">
        <Avatar image={avatarImage} size='10rem' />
    </div>
    <div class="details">
        <div class="name">
            <h1>
                {devName}
            </h1>
        </div>
        <div class="rule">
            <hr />
        </div>
        <p>
            {devTagline}
        </p>
        <div class="bio">
            <h2>
                Bio
            </h2>
            {@html devBio}
        </div>
    </div>
</div>

<style lang="scss">
    .bio {
        h2 {
            text-decoration: underline;
        }
    }
    .dev-card {
        cursor: default;
        $--padding: 0.5rem;
        border-radius: 1rem;
        padding: $--padding;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        height: fit-content;
        width: calc(30% - 2* $--padding);
        transition: all 0.25s;
        .banner-image {
            height: 20rem;
            border-top-left-radius: 1rem;
            border-top-right-radius: 1rem;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            position: absolute;
            width: calc(100% - 2*$--padding);
            z-index: 5;
        }
        .avatar {
            $--radius: 10rem;
            margin-top: 15rem;
            margin-left: calc(50% - 5rem);
            z-index: 5;
        }

        .details {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.25s;
            .rule {
                display: none;
            }
        }
        .bio {
            display: none;
        }
        &:hover {
            width: calc(100% - 2* $--padding);;
            height: fit-content;
            .details {
                height: fit-content;
                margin: 1rem 2.5rem;
                align-items: flex-start;
                text-align: left;
                position: relative;
                border-radius: 1rem;
                padding: 1rem;
                background-color: rgba(black, 0.65);
                z-index: 5;

                .rule {
                    width: 100%;
                    display: block;
                    display: flex;
                    justify-content: flex-start;
                    hr {
                        width: 100%;
                    }
                }

                .bio {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
            }
            &:after {
            content:'';
            top:0;
            transform:translateX(100%);
            width:100%;
            height:100%;
            position: absolute;
            z-index:1;
            animation: slide 1.5s;
            
            /* 
            CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/ 
            */
            background: linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 50%,rgba(128,186,232,0) 99%,rgba(125,185,232,0) 100%); /* W3C */
        }
        }

        /* animation */

        @keyframes slide {
            0% {transform:translateX(-100%);}
            100% {transform:translateX(100%);}
        }
        @media only screen and (max-width: 800px) {
            width: calc(20rem - 2* $--padding);
        }
    }
</style>