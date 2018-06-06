<template>
    <article class='testimonials'>
        <header>
            <h1>Testimonials</h1>
        </header>
        <section v-for='(testimonial, index) in testimonials' class='testimonial' :key='index'>
            <div class='thumb'>
                <figure>
                    <img :src='testimonial.img' alt='A ninja' />
                </figure>
            </div>
            <div class='text'>
                <p class='line'>"<em>{{testimonial.line}}</em>"</p>
                <p class='signum'> - {{testimonial.signum}}</p>
            </div>
        </section>
    </article>
</template>

<script>
import Ninja1 from '@/assets/ninja1.png'
import Ninja2 from '@/assets/ninja2.png'
import Ninja3 from '@/assets/ninja3.png'
import Ninja4 from '@/assets/ninja4.png'
import Ninja5 from '@/assets/ninja5.png'
import Ninja6 from '@/assets/ninja6.png'
import Ninja7 from '@/assets/ninja7.jpg'
import Ninja8 from '@/assets/ninja8.jpg'
import Ninja9 from '@/assets/ninja9.jpg'

export default {
  data() {
    return {
      testimonials: [
        {
          img: Ninja1,
          line: 'Vilken kille, vilken skinka!',
          signum: 'Magnus Ferm'
        },
        {
          img: Ninja2,
          line:
            'I vanliga fall undviker jag skinka men för långskinkan gör man ett undantag',
          signum: 'The Agron'
        },
        {
          img: Ninja3,
          line:
            'Varje gång Långskinkan kramar mig glömmer jag varför jag gick in i rummet',
          signum: 'Martin Lindström'
        },
        {
          img: Ninja4,
          line: 'Långskinkan är ett stort hjärta på långa styltor',
          signum: 'Otto Remse'
        },
        {
          img: Ninja5,
          line: 'Ganska lång, Mycket bra!',
          signum: 'Niklas Dahlman'
        },
        {
          img: Ninja6,
          line: 'Hen är riktig gottepelle!',
          signum: 'Michał Łusiak'
        },
        {
          img: Ninja7,
          line: 'Långskinkan är smartare än ett kubernetes kluster.',
          signum: 'Mikael Brassman'
        },
        {
          img: Ninja8,
          line:
            'det finns lika mycket tvångskram i människan som det finns skinka på jul',
          signum: 'Lumbergh'
        },
        {
          img: Ninja9,
          line: 'Det stora hjärtat kompenserar för den lilla hjärnan - I love you man!',
          signum: 'Chrille'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1024px;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    max-width: 95%;
  }
  .testimonial {
    display: flex;
    flex-direction: row;
    text-align: left;
    img {
      box-shadow: 0 0 1rem #000;
    }
    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      p {
        margin: 0.25rem;
        &.line {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.2rem;
        }
        &.signum {
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>
