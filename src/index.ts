/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
}

interface RoomResponse {
	id: number,
	name: string
	playlist: [RoomPlaylistItem]
	// todo: finish this
}

interface RoomPlaylistItem {
	"id": number,
	"room_id": number,
	"beatmap_id": number,
	"ruleset_id": number,
	"expired": boolean,
	"owner_id": number,
	"playlist_order": number,
	"played_at": string,
	// todo: finish this
}

interface PlaylistItemScore {
	playlist_item_id: number,
	room_id: number,
	solo_score_id: number | undefined,
	user_id: number,
	total_score: number,
	// todo: finish this
}

interface PlaylistItemScoresPaginator {
	total: number,
	scores: [PlaylistItemScore?]
	cursor: number | undefined
	cursor_string: string | undefined
	// todo: finish/validate this
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		// todo: get room playlist items
		// GET https://osu.ppy.sh/api/v2/rooms/{room_id}
		// get array of playlist items in response.playlist

		// todo: get player scores for each playlist item
		// GET https://osu.ppy.sh/api/v2/rooms/{room_id}/playlist/{playlist_item_id}/scores
		// returns a PlaylistItemScoresPaginator

		return new Response("727");
	},
};
