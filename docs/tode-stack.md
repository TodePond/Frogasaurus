This is a work-in-progress!

# Tode Stack Guide
Here's the whole stack that you need to code like a tode.

## Setup
### Step 1: linux on a chromebook
Get a chromebook and enable linux in the settings.

### Step 2: code-server
Install code-server:
```
curl -fsSL https://code-server.dev/install.sh | sh
```
Install 'Settings Sync' extension:
```

```
Install TodePond colour theme:
```

```

### Step 3: deno
Install deno:
```
curl -fsSL https://deno.land/x/install/install.sh | sh
```
Add deno to your path (replace `todepond` with your linux username):
```
echo 'export DENO_INSTALL="/home/todepond/.deno"' >> ~/.bashrc
```
```
echo 'export PATH="$DENO_INSTALL/bin:$PATH"' >> ~/.bashrc
```

### Step 4: frogasaurus
Install frogasaurus:
```
deno install --allow-write=. --allow-read=. https://deno.land/x/frogasaurus/frogasaurus.js
```

### Step 4: file_server
Install file_server:
```
deno install --allow-read --allow-net https://deno.land/std/http/file_server.ts
```

## Usage
### Code Editor
```
code-server --auth none
```
