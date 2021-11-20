// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts@4.3.3/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.3.3/security/Pausable.sol";
import "@openzeppelin/contracts@4.3.3/access/Ownable.sol";

contract HunterEdCard is ERC721, Pausable, Ownable {
    constructor() ERC721("HunterEdCard", "HEC") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }
}
