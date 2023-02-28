<script type="ts">
    import Heading from "$lib/components/ui/Heading/Heading.svelte";
    import TextInput from "$lib/components/ui/TextInput/TextInput.svelte";
    import Button from "$lib/components/ui/Button/Button.svelte";

    let name: string;
    let mobile: string;
    let email: string;
    let message: string;
    let submit: () => void;
</script>

<section>
    <div class="heading">
        <Heading title="Get In Touch" />
    </div>
    <div class="content">
        <div class="maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.687683331595!2d76.80649510127387!3d30.72717933154892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed212e27c319%3A0x491b3277baba3581!2sChandigarh%20College%20Of%20Engineering%20and%20Technology%20Degree%20Wing!5e0!3m2!1sen!2sin!4v1677586808063!5m2!1sen!2sin" width="800" height="600" style="border:0;" title="Chandigarh College of Engineering and Technology, Sector 26, Chandigarh map." allow="fullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="form">
            <form action="">
                <div class="formContent">
                    <div class="left">
                        <TextInput variant="textbox" value={name} placeholder="Your name" />
                        <TextInput variant="textbox" value={mobile} placeholder="Your phone number" />
                        <TextInput variant="email" value={email} placeholder="Your email" />
                    </div>
                    <div class="right">
                        <TextInput variant="textarea" value={message} placeholder="Your message" />
                    </div>
                </div>
                <div class="submit">
                    <Button variant="primary" label="Submit" onClick={submit} size="large" />
                </div>
            </form>
        </div>
    </div>
</section>

<style lang="scss">
    section {
        display: block;
        &>.content {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 5vh;
            &>.maps {
                width: 100%;
                height: 50vh;
                &>iframe {
                    height: inherit;
                    width: inherit;
                    border-radius: 24px;
                }
            }
            &>.form {
                width: inherit;
                &>form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 5vh;
                    width: inherit;
                    &>.formContent {
                        display: grid;
                        grid-template-columns: 47.5% 47.5%;
                        gap: 5%;
                        width: 100%;
                        &>.left {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        }
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
</style>