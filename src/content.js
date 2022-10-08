import React, { Component } from 'react';
import './Text.css';

class Text extends Component {

    render() {

        let className = "button banner " + this.props.id;

        let redClassName = "text";
        let whiteClassName = "text visable";

        if (this.props.plsColor === "Red") {
            redClassName = "text visable";
            className = "button banner red"
            whiteClassName = "text"


        }


        if (this.props.plsColor === "White") {
            whiteClassName = "text visable";
            className = "button banner white"
            console.log(redClassName);

        }
        let yellowClassName = "text";

        if (this.props.plsColor === "Yellow") {
            yellowClassName = "text visable";
            className = "button banner yellow"
            whiteClassName = "text"

        }
        let greenClassName = "text";

        if (this.props.plsColor === "Green") {
            greenClassName = "text visable";
            className = "button banner green"
            whiteClassName = "text"

        }
        let blueClassName = "text";

        if (this.props.plsColor === "Blue") {
            blueClassName = "text visable";
            className = "button banner blue"
            whiteClassName = "text"

        }
        let purpleClassName = "text";

        if (this.props.plsColor === "Purple") {
            purpleClassName = "text visable";
            className = "button banner purple"
            whiteClassName = "text"

        }
        let orangeClassName = "text";

        if (this.props.plsColor === "Orange") {
            orangeClassName = "text visable";
            className = "button banner orange"
            whiteClassName = "text"

        }
        let blackClassName = "text";

        if (this.props.plsColor === "Black") {
            blackClassName = "text visable";
            className = "button banner black"
            whiteClassName = "text"

        }

        return (

            <div id={this.props.id} className={className}>
                <div className={redClassName}>
                    <p >
                        The Color Red</p><p>
                        Red is the color of energy, passion and action. </p><p>
                        The color red is a warm and positive color associated with our most physical needs and our will to survive. It exudes a strong and powerful masculine energy.</p><p>
                        Red is energizing. It excites the emotions and motivates us to take action.</p><p>
                        It signifies a pioneering spirit and leadership qualities, promoting ambition and determination.</p><p>
                        It is also strong-willed and can give confidence to those who are shy or lacking in will power.</p><p>
                        Being the color of physical movement, the color red awakens our physical life force.</p><p>
                        It is the color of sexuality and can stimulate deeper and more intimate passions in us, such as love and sex on the positive side or revenge and anger on the negative.
                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={whiteClassName}>
                    <p >
                        The Color White</p><p>
                        White is purity, innocence, wholeness and completion</p><p>
                        The color white is color at its most complete and pure, the color of perfection. The psychological meaning of white is purity, innocence, wholeness and completion.</p><p>

                        In color psychology white is the color of new beginnings, of wiping the slate clean, so to speak. It is the blank canvas waiting to be written upon. While white isn't stimulating to the senses, it opens the way for the creation of anything the mind can conceive.</p><p>

                        White contains an equal balance of all the colors of the spectrum, representing both the positive and negative aspects of all colors. Its basic feature is equality, implying fairness and impartiality, neutrality and independence. It is interesting to note that babies come into the world with a perfect balance of white, ready to imprint their lives with all the colors of the spectrum (hopefully!) from all their life experiences.
                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={orangeClassName}>
                    <p >
                        The Color Orange</p><p>
                        The color of adventure and social communication</p><p>
                        The color orange radiates warmth and happiness, combining the physical energy and stimulation of red with the cheerfulness of yellow.</p><p>

                        Orange relates to 'gut reaction' or our gut instincts, as opposed to the physical reaction of red or the mental reaction of yellow.</p><p>

                        Orange offers emotional strength in difficult times. It helps us to bounce back from disappointments and despair, assisting in recovery from grief.</p><p>

                        The color psychology of orange is optimistic and uplifting, rejuvenating our spirit. In fact orange is so optimistic and uplifting that we should all find ways to use it in our everyday life, even if it is just an orange colored pen that we use.</p><p>

                        Orange brings spontaneity and a positive outlook on life and is a great color to use during tough economic times, keeping us motivated and helping us to look on the bright side of life.</p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={yellowClassName}>
                    <p >
                        The Color Yellow</p><p>
                        Yellow is the color of
                        the mind and the intellect</p><p>
                        The color yellow relates to acquired knowledge. It is the color which resonates with the left or logic side of the brain stimulating our mental faculties and creating mental agility and perception.</p><p>

                        Being the lightest hue of the spectrum, the color psychology of yellow is uplifting and illuminating, offering hope, happiness, cheerfulness and fun.</p><p>

                        In the meaning of colors, yellow inspires original thought and inquisitiveness.</p><p>

                        Yellow is creative from a mental aspect, the color of new ideas, helping us to find new ways of doing things. It is the practical thinker, not the dreamer.

                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={greenClassName}>
                    <p >
                        The Color Green</p><p>
                        Green is the color of balance,
                        harmony and growth</p><p>
                        The color green relates to balance and harmony. From a color psychology perspective, it is the great balancer of the heart and the emotions, creating equilibrium between the head and the heart.</p><p>

                        From a meaning of colors perspective, green is also the color of growth, the color of spring, of renewal and rebirth. It renews and restores depleted energy. It is the sanctuary away from the stresses of modern living, restoring us back to a sense of well being. This is why there is so much of this relaxing color on the earth, and why we need to keep it that way.</p><p>

                        Green is an emotionally positive color, giving us the ability to love and nurture ourselves and others unconditionally. A natural peacemaker, it must avoid the tendency to become a martyr.




                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={blueClassName}>
                    <p >
                        The Color Blue</p><p>
                        The color blue is the color of trust and responsibility.</p><p>
                        This color is one of trust, responsibility, honesty and loyalty. It is sincere, reserved and quiet, and doesn't like to make a fuss or draw attention. It hates confrontation, and likes to do things in its own way.</p><p>

                        From a color psychology perspective, blue is reliable and responsible.</p><p>

                        This color exhibits an inner security and confidence.</p><p>

                        You can rely on it to take control and do the right thing in difficult times.</p><p>

                        It has a need for order and direction in its life, including its living and work spaces.</p><p>

                        This is a color that seeks peace and tranquility above everything else, promoting both physical and mental relaxation.</p><p>

                        It reduces stress, creating a sense of calmness, relaxation
                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={purpleClassName}>
                    <p >
                        The Color Purple</p><p>

                        Purple is the color of
                        the imagination and spirituality</p><p>

                        The color purple relates to the imagination and spirituality. It stimulates the imagination and inspires high ideals. It is an introspective color, allowing us to get in touch with our deeper thoughts.</p><p>

                        The difference between violet and purple is that violet appears in the visible light spectrum, or rainbow, whereas purple is simply a mix of red and blue. Violet has the highest vibration in the visible spectrum.</p><p>

                        While the violet is not quite as intense as purple, its essence is similar. Generally the names are interchangeable and the meaning of the colors is similar. Both contain the energy and strength of red with the spirituality and integrity of blue. This is the union of body and soul creating a balance between our physical and our spiritual energies.


                    </p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
                <div className={blackClassName}>
                    <p >
                        The Color Black</p><p>
                        Black is mysterious and protective</p><p>
                        The color black relates to the hidden, the secretive and the unknown, and as a result it creates an air of mystery. It keeps things bottled up inside, hidden from the world.</p><p>

                        In color psychology this color gives protection from external emotional stress.</p><p>

                        It creates a barrier between itself and the outside world, providing comfort while protecting its emotions and feelings, and hiding its vulnerabilities, insecurities and lack of self confidence.</p><p>

                        Black is the absorption of all color and the absence of light.</p><p>

                        Black hides, while white brings to light.</p><p>

                        What black covers, white uncovers.</p><p>

                        We all use black at various times to hide from the world around us in one way or another. Some of us use it to hide our weight; others among us use it to hide our feelings, our fears or our insecurities.</p>
                    {/* source: https://www.empower-yourself-with-color-psychology.com/ */}
                </div>
            </div>
        );
    }
}

export default Text;