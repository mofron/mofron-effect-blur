/**
 * @file mofron-effect-blur/index.js
 * @brief blur effect for mofron
 *        this effect makes the component to blurring.
 * @license MIT
 */

module.exports = class extends mofron.class.Effect {
    /**
     * initialize blur effect
     *
     * @param (mixed) 'value' parameter
     *                key-value: effect config
     * @short value
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.modname('Blur');
            this.shortForm('value');
            
            this.transition("filter");

            /* init config */
	    this.confmng().add("value", { type: "size", init: "0.05rem" });
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enalbe blur effect
     * 
     * @param (component) effect target component
     * @type private
     */
    contents (tgt) {
        try {
            tgt.style({ 'filter' : 'blur('+ this.value() + ')' });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * blur size setter/getter
     * 
     * @param (string) blur size (css value)
     * @return (string) blur size
     * @type parameter
     */
    value (prm) {
        try {
	    return this.confmng("value", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
