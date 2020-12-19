/***************
ALL IMPORTS
****************/

/* header */
/* hero */
import { heroData } from './data/heroData.js';
import { renderHeroSocials } from './components/hero-socials/renderHeroSocials.js'
/* about */
/* services */
import { renderServices } from './components/services/renderServices.js';
import { servicesData } from './data/servicesData.js';
/* statistics */
import { statsData } from './data/statsData.js';
import { Stats } from './components/stats/Stats.js';
/* education and experience */
import { eduData } from './data/eduBlocksData.js';
import { Education } from './components/education/Education.js';
/* hire me */
/* our work */
/* testimonials */
import { clientsData } from './data/clientsData.js';
import { Clients } from './components/clients/Clients.js'
/* trusted, logos */
/* subscribe */
/* blog */
/* contact */
/* footer */

/***************
EXECUTION
****************/

/* header */
/* hero */
renderHeroSocials('.container.hero .socials', heroData);
/* about */
/* services */
renderServices('#our_services_block', servicesData);

/* statistics */

new Stats({
    selector: '#stats',
    data: statsData
});

/* education and experience */
new Education({
    selectorLeft: '#education-left',
    selectorRight: '#education-right',
    data: eduData
});
/* hire me */
/* our work */
/* testimonials */
new Clients(
    {
        selector: '.container #testimonials',
        data: clientsData
    }
)
/* trusted, logos */
/* subscribe */
/* blog */
/* contact */
/* footer */