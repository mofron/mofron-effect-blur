/**
 * @file mofron-effect-blur/index.js
 * @author simpart
 */

/**
 * @class Blur
 * @brief blur effect class
 */
mofron.effect.Blur = class extends mofron.Effect {
    
    /**
     * enalbe blur effect
     */
    enable (tgt) {
        try {
            this.target().style({
                'filter' : 'blur('+ this.value() +'px)'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable blur effect
     */
    disable (tgt) {
        try {
            this.target().style({
                'filter' : 'blur(0px)'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    value (val) {
        try {
            if (undefined === val) {
                return (undefined === this.m_value) ? 10 : this.m_value;
            }
            if (('number' !== typeof val) || (0 > val)) {
                throw new Error('invalid parameter');
            }
            this.m_value = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.effect.Blur;