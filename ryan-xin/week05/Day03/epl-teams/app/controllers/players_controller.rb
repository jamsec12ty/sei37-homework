class PlayersController < ApplicationController

  # CREATE
  def new
    @player = Player.new
  end

  def create
    Player.create player_params
    redirect_to(players_path)
  end


  # READ
  def index
    @players = Player.all
  end

  def show
    @player = Player.find params[:id]
  end


  # UPDATE
  def edit
    @player = Player.find params[:id]
  end

  def update
    player = Player.find params[:id]
    player.update player_params
    redirect_to(player_path(params[:id]))
  end


  # DESTROY
  def destroy
    Player.destroy params[:id]
    redirect_to(players_path)
  end

  
  private

  def player_params
    params.require(:player).permit(:name, :nationality, :age, :position, :number, :team_id)
  end
  
end
