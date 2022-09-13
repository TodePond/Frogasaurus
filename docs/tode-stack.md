# Tode Stack Guide
Here's the whole stack that you need to code like a tode.

## Setup
### Step 1: Use linux on a chromebook
Get a chromebook and enable linux in the settings.

### Step 2: Install deno
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```
Replace `todepond` with your linux username:
```
echo 'export DENO_INSTALL="/home/todepond/.deno"' >> ~/.bashrc
```
```
echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bashrc
```

### Step 3: Install frogasaurus
```
deno install --allow-write=. --allow-read=. https://deno.land/x/frogasaurus/frogasaurus.js
```

### Step 4: Install file_server
```
deno install --allow-read --allow-net https://deno.land/std/http/file_server.ts
```
