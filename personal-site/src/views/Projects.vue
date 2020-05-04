<template>
    <div class="project">
        <figure>
            <img src="../assets/curtis.png" alt="Curtis logo">
            <figcaption>
                <h2>Curtis</h2>
                <div>Curtis is a Discord bot for the
                <a href="https://www.youtube.com/channel/UC_LtbK9pzAEI-4yVprLOcyA">Cortex Development</a> 
                <a href="https://discord.gg/9EncUC5"> discord server.</a>
                </div>
                <div>This bot is made with JDA and the sourcecode can be found on 
                <a href="https://github.com/DaanWet/Curtis"> github</a>
                </div>
            </figcaption>
        </figure>
        <figure>
            <img class="rounded" src="../assets/Sumarville.png" alt="Sumarville logo">
            <figcaption>
                <h2>Sumarville</h2>
                <div>
                    Sumarville is a Discord bot for D&D Discord servers it includes a calendar (incl. reminders and food polls), simple dice rolling and character creation
                </div>
                <div>
                    The sourcecode can be found 
                    <a href="https://github.com/DaanWet/DnD_Discord_Bot">here</a>
                </div>
            </figcaption>
        </figure>
        <figure>
            <img class="rounded" src="../assets/teamsplus_t.png" alt="Teams Plus logo"/>
            <figcaption>
                <h2>Teams Plus</h2>
                <div>
                    Teams Plus is a spigot plugin which adds a reworked teams system to the game, including warp and afk handling
                </div>
                <div>
                The sourcode can be found
                <a href="https://github.com/DaanWet/MinecraftTeamsPlugin"> here</a>
                </div>
            </figcaption>
        </figure>
        <figure>
            <img src="../assets/Axe.png" alt="Minecraft Axe"/>
            <figcaption>
            <h2>LumberAxe</h2>    
            <div>
                LumberAxe is a simple spigot plugin which adds a new axe to the game which chops down trees instantly
            </div>
            <div>
                The sourcode can be found
                <a href="https://github.com/DaanWet/LumberAxe"> here</a>
            </div>
            </figcaption>
        </figure>
    </div>
</template>

<script>



export default {
}
</script>

<style>

.project {
    padding: 20px;
    margin: 0px 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.project figure {
    width: 275px;
    height: 400px;
    border-radius: 10px;
    border-color: #dab551;
    background-color: #f8df99;
    border-style: solid;
    border-spacing: 10px;
    padding-top: 12px;
    padding-bottom: 12px;
    margin: auto;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
}

.project figure figcaption {
    color: gray;
}
.project a {
    color:slategrey
}

.project figure img{
    width: 90%;
}

.rounded{
    border-radius: 100%;
}

</style>