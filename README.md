# Sunrise Homes: test site for the Site Listing Chatbot

A pretend realtor website for testing the Footfallz **Site Listing Chatbot**. It is not a real brokerage.

Live: https://pawan-loc.github.io/site-listing-test/

Pages show only an address and MLS number. Prices, photos and details come live from the chatbot, through Footfallz.

## Set up (once, after the feature is live in production)

1. In Footfallz, go to Chatbot Sessions → **Site Listing Chatbot**.
2. Listing page address: `https://pawan-loc.github.io/site-listing-test/homes/{mlsId}` → Generate.
3. Copy the `data-embed-key` value from the embed code into `EMBED_KEY` in `config.js`, or open any page once with `?embed_key=<key>` (remembered in your browser only).

## What to test

1. Home page → open the chat → ask "4 bedroom homes in Irvine".
2. Click a listing card in the chat → this site's page for that home opens, the chat stays open, and the tip line says "Asking about <address>".
3. Ask about the home (price, HOA, year built) → correct answers.
4. Click "View all" → click a card → this site's page opens.
5. Open a listing page directly (e.g. from the list) → the chat knows the home.
6. Click "Section 1 / Section 2" → the page moves, nothing reloads.
7. "I'd like to talk to the agent" → names the realtor with phone and email.
8. Keep asking until phone verification appears → verify → "You're all set! Keep chatting with me here." and the chat continues.
9. In Footfallz → Chatbot Sessions, the chat shows a "Site listing chatbot" label.

Homes outside the 12 listed here open as "page not found" on this static site.
