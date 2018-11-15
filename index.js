/**
 * @file mofron-effect-blur/index.js
 * @author simpart
 */
const mf = require('mofron');
/**
 * @class Blur
 * @brief blur effect class
 */
mf.effect.Blur = class extends mf.Effect {
    /**
     * initialize blur effect
     *
     * @param p1 (string) blur size (css value)
     * @param p1 (object) effect option
     */
    constructor (po) {
        try {
            super();
            this.name('Blur');
            this.prmMap('value');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enalbe blur effect
     * 
     * @note private method
     */
    enable (tgt) {
        try {
            tgt.style({
                'filter' : 'blur('+ this.value().toString() + ')'
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable blur effect
     *
     * @note private method
     */
    disable (tgt) {
        try { tgt.style({ 'filter' : null }); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur size setter/getter
     * 
     * @param p1 (string) blur size (css value)
     * @return (Size) size object
     */
    value (val) {
        try {
            return this.member(
                'value', 
                ['Size'],
                (undefined !== val) ? mf.func.getSize(val) : val
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.effect.Blur;
/* end of file */
