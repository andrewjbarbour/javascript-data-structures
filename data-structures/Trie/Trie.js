import TrieNode from "./TrieNode.js";

export default class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  insert(word) {
    let current = this.root;

    for (let character of word) {
      if (current.children[character] === undefined) {
        current.children[character] = new TrieNode(character);
      }
      current = current.children[character];
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;

    for (let character of word) {
      if (current.children[character] === undefined) {
        return false;
      }
      current = current.children[character];
    }
    return current.isEndOfWord;
  }
}

let trie = new Trie();
trie.insert("dog");
trie.insert("doggie");
trie.insert("cat");
console.log(trie.search("dog"));
console.log(trie.search("doggie"));
