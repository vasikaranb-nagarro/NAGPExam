<script>
  import { get } from "svelte/store";
  import { post } from "../stores/store";

  let localPosts;

  $: localPosts = $post;

  let newComment = [];

  function updateComment(event, index) {
    newComment[index] = event?.target?.value;
  }

  function saveComment(data) {
    console.log(data, newComment[data]);
    post.update((value) => {
      value[data].comments.push({
        text: newComment[data],
        liked: false,
        unliked: false,
        createdBy: "You",
      });
      newComment[data] = "";
      return value;
    });
  }
</script>

<div class="card">
  <div>
    {#each localPosts as seppost, index}
      <div class="sep">
        <h3 class="title">{seppost?.title.toUpperCase()}</h3>
        <p class="desc">{seppost?.description}</p>
        <p class="count">Comments ( {seppost?.commentsCount})</p>
        {#each seppost?.comments as sepcomment}
          <div class="clist">
            <h5 class="cc">{sepcomment?.createdBy}</h5>
            <p class="ct">{sepcomment.text}</p>
            <p class="cl">
              <u>Like</u>
              |
              <u>Disike </u>
            </p>
            <p class="cl">
              {sepcomment.liked ? "Liked by you" : "No likes yet"} |
              {sepcomment.unliked ? "Disliked by you" : "No dislikes yet"}
            </p>
          </div>
        {/each}
        <div class="ip">
          <input
            maxlength="400"
            on:change={() => {
              updateComment(event, index);
            }}
            value={newComment[index] || ""}
          />
          <button
            on:click={() => {
              saveComment(index);
            }}>Send</button
          >
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  input {
    width: 500px;
    margin-right: 2rem;
  }
  .card {
    background-color: white;
    color: darkblue;
  }
  .sep {
    background-color: gainsboro;
    padding: 0rem;
    padding-left: 1rem;
    margin: 0rem;
    border-radius: 20px;
  }
  .clist {
    padding: 0rem;
    margin: 1rem;
  }
  .title {
    padding-left: 5px;
    padding-top: 5px;
    display: flex;
    justify-content: flex-start;
  }
  .desc {
    padding-left: 15px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
    font-weight: 500;
  }

  .count {
    padding-left: 15px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
    font-size: small;
  }
  .cc {
    padding-left: 15px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
  }
  .ct {
    padding-left: 20px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
    font-size: smaller;
  }
  .cl {
    padding-left: 30px;
    padding-bottom: 5px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
    font-size: small;
  }
  .ip {
    padding-left: 30px;
    padding-bottom: 15px;
    display: flex;
    justify-content: flex-start;
    margin: 0rem;
  }
</style>
