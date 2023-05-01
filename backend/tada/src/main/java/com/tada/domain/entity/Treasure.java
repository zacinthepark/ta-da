package com.tada.domain.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@Table(name = "treasure")
@AllArgsConstructor
@NoArgsConstructor
public class Treasure extends BaseTimeEntity{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private	Long id;			// 참가자 고유번호
	@ManyToOne
	@JoinColumn(name = "room_id")
	private Room room;			// 게임방
	private String img;
	private String lat;
	private String lng;
	private String hint;
	private String rewordImg;
	private String reword;
	private Boolean status;
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User finder;

}

