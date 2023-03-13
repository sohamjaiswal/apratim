<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let desc: string;
</script>

<div class="card">
    <div class="card__content">
        <div class="card__front">
            <h3 class="card__title">{title}</h3>
            <p class="card__subtitle">{subtitle}</p>
        </div> 
        <div class="card__back">
            <p class="card__body">{desc}</p>
        </div>
    </div>
</div>

<style lang="scss">
    .card {
        width: 400px;
        &>.card__content {
            text-align: center;
            position: relative;
            padding: 15em 5em;
            transition: transform 3s;
            transform-style: preserve-3d;
            &>div {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 5em 3em;
                backface-visibility: hidden;
                transform-style: preserve-3d;
                display: grid;
                align-content: center;
                &.card__front {
                    background-color: var(--clr);
                    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/308367/fair.jpg);
                    background-size: cover;
                    background-blend-mode: overlay;
                    color: #333;
                    &::before {
                        content: '';
                        position: absolute;
                        --spacer: 1em;
                        top: var(--spacer);
                        bottom: var(--spacer);
                        left: var(--spacer);
                        right: var(--spacer);
                        border: 3px solid currentColor;
                        transform: var(--level-one);
                    }
                    &>.card__title {
                        font-size: 3.5rem;
                        transform: var(--level-three);
                        order: 2;
                        text-transform: uppercase;
                    }
                    &>.card__subtitle {
                        transform: var(--level-two);
                        text-transform: uppercase;
                        letter-spacing: 4px;
                        font-size: .75rem;
                        font-weight: var(--fw-bold);
                        opacity: .7;
                    }
                }
                &.card__back {
                    transform: rotateY(.5turn);
                    color: var(--clr);
                    background: #333;
                    &>.card__body {
                        transform: var(--level-two);
                        font-weight: var(fw-normal);
                        font-size: 1.5rem;
                        line-height: 1.6;
                    }
                }
            }
        }
        &:hover .card__content {
            transform: rotateY(.5turn);
        }
    }
</style>