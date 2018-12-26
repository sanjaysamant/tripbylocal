<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Continent extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'status',
    ];

    public function country(){

        return $this->hasMany('App\Country');
    }
}
