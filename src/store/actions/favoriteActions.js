import FavoriteService from "../../services/favorite";

export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"
export const FETCH_FAVORITE_JOBS = "FETCH_FAVORITE_JOBS"

let favoriteJobsService = new FavoriteService()

export function addToFavorite(job) {
    return {
        type: ADD_TO_FAVORITE,
        payload: job
    }
}

export function removeFromFavorite(job) {
    return {
        type: REMOVE_FROM_FAVORITE,
        payload: job
    }
}

export function fetchFavoriteJobs() {
    return async (dispatch, getState) => {
        const response = await favoriteJobsService.findAllFavoriteJobs()
        console.log(response.data.data)
        dispatch({
            type: FETCH_FAVORITE_JOBS,
            payload: response.data.data
        })
    }
}