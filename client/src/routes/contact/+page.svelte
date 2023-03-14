<script type="ts">
    import Heading from "$lib/components/ui/Heading/Heading.svelte";
    import Accordian from "$lib/components/ui/Accordian/Accordian.svelte";
    import emailIcon from '$lib/assets/envelope-solid.svg';
    import phoneIcon from '$lib/assets/phone-solid.svg';

    let faq = [
        {
            question: 'How to register?',
            answer: "Well... we also don't know, lol!"
        },
        {
            question: 'Address of CCET?',
            answer: "Sector 26, Chandigarh"
        }
    ];
</script>

<section>
    <div class="heading">
        <Heading title="Get In Touch" />
    </div>
    <div class="faq">
        <div class="subheading">
            Frequently Asked Questions:
        </div>
        <div class="faqContent">
            {#each faq as {question, answer}}
                <Accordian title={question} desc={answer} />
            {/each}
        </div>
    </div>
    <div class="maps">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.687683331595!2d76.80649510127387!3d30.72717933154892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1677586808063!5m2!1sen!2sin" width="800" height="600" style="border:0;" title="Chandigarh College of Engineering and Technology, Sector 26, Chandigarh map." allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="contact">
        <div class="mail">
            <div class="icon">
                <img src={emailIcon} alt="Email">
            </div>
            <a href="mailto:apratim@ccet.ac.in">
                apratim@ccet.ac.in
            </a>
        </div>
        <div class="phone">
            <div class="icon">
                <img src={phoneIcon} alt="Phone">
            </div>
            <a href="tel:+917970875920">
                (+91) 79708-75920
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: flex;
        flex-direction: column;
        gap: 5vh;
        margin-bottom: 5vh;
        &>.faq {
            display: flex;
            flex-direction: column;
            gap: 1vw;
            &>.subheading {
                font-size: 4vh;
                @media screen and (max-width: 500px) {
                    font-size: 1.5rem !important;
                }
            }
            &>.faqContent {
                display: flex;
                flex-direction: column;
                gap: 1vw;
            }
        }
        &>.maps {
            width: 100%;
            height: 50vh;
            &>iframe {
                height: inherit;
                width: inherit;
                border-radius: 24px;
            }
        }
        &>.contact {
            display: flex;
            width: 100%;
            justify-content: space-evenly;
            padding: 2vh 0;
            &>div {
                width: inherit;
                display: flex;
                gap: 2vw;
                align-items: center;
                width: max-content;
                &:hover {
                    transition: all 0.2s ease;
                    transform: scale(0.9);
                    cursor: pointer;
                }
                &>a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 2rem;
                }
                &>.icon {
                    background-color: var(--primary);
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    &>img {
                        height: 30px;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 550px) {
        .formContent {
            display: flex !important;
            flex-direction: column;
            gap: 2vh !important;
            &>.left {
                gap: 2vh !important;
            }
        }
    }
    @media screen and (max-width: 920px) {
        .contact {
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
    }
    @media screen and (max-width: 470px) {
        .contact {
            &>div {
                &>a {
                    font-size: 1.5rem !important;
                }
                &>.icon {
                    padding: 10px !important;
                    &>img {
                        height: 20px !important;
                    }
                }
            }
        }
    }
</style>