import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const loadSeriesByGenre = (genre) => api.get('series?genre='+genre)
export const deleteSeries = (id) => api.delete('series/'+id)
export const loadSeriesById = (id) => api.get('series/'+id)
export const updateSeries = (series) => api.put('series/'+series.id, series)



const apis = {
    loadGenres: loadGenres,
    saveSeries: saveSeries,
    loadSeriesByGenre: loadSeriesByGenre,
    deleteSeries: deleteSeries,
    loadSeriesById: loadSeriesById,
    updateSeries: updateSeries
}

export default apis