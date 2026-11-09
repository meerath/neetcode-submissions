class PrefixTree {
    constructor() {
        this.child= {}
        this.eow = false 
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        var node = this
        for(var i = 0 ; i < word.length ; i++){
            var char = word[i]
            if(!node.child[char]){
                node.child[char] = new PrefixTree()
            } 
            if(i == word.length - 1){
                node.child[char].eow = true
            }
            node  = node.child[char]
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
     var node = this
      for(var i = 0 ; i < word.length ; i++){
        var char = word[i]
        if(!node.child[char]){
            return false
        }
        node  = node.child[char]
      }
      return node.eow
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this;

        for (let char of prefix) {

            if (!node.child[char]) {
                return false;
            }

            node = node.child[char];
        }

        return true;
    }
}
